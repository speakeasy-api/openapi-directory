import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Kernel mode rootkit signatures.
 */
export declare class KernelRootkit extends SpeakeasyBase {
    /**
     * Rootkit name when available.
     */
    name?: string;
    /**
     * True when unexpected modifications of kernel code memory are present.
     */
    unexpectedCodeModification?: boolean;
    /**
     * True when `ftrace` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedFtraceHandler?: boolean;
    /**
     * True when interrupt handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedInterruptHandler?: boolean;
    /**
     * True when kernel code pages that are not in the expected kernel or module code regions are present.
     */
    unexpectedKernelCodePages?: boolean;
    /**
     * True when `kprobe` points are present with callbacks pointing to regions that are not in the expected kernel or module code range.
     */
    unexpectedKprobeHandler?: boolean;
    /**
     * True when unexpected processes in the scheduler run queue are present. Such processes are in the run queue, but not in the process task list.
     */
    unexpectedProcessesInRunqueue?: boolean;
    /**
     * True when unexpected modifications of kernel read-only data memory are present.
     */
    unexpectedReadOnlyDataModification?: boolean;
    /**
     * True when system call handlers that are are not in the expected kernel or module code regions are present.
     */
    unexpectedSystemCallHandler?: boolean;
}
