import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Kernel Type of the notebook.
 */
export declare enum GoogleCloudDataplexV1ContentNotebookKernelTypeEnum {
    KernelTypeUnspecified = "KERNEL_TYPE_UNSPECIFIED",
    Python3 = "PYTHON3"
}
/**
 * Configuration for Notebook content.
 */
export declare class GoogleCloudDataplexV1ContentNotebook extends SpeakeasyBase {
    /**
     * Required. Kernel Type of the notebook.
     */
    kernelType?: GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
}
