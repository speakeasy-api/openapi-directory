package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KernelRootkit
 * Kernel mode rootkit signatures.
**/
public class KernelRootkit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public KernelRootkit withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedCodeModification")
    public Boolean unexpectedCodeModification;
    public KernelRootkit withUnexpectedCodeModification(Boolean unexpectedCodeModification) {
        this.unexpectedCodeModification = unexpectedCodeModification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedFtraceHandler")
    public Boolean unexpectedFtraceHandler;
    public KernelRootkit withUnexpectedFtraceHandler(Boolean unexpectedFtraceHandler) {
        this.unexpectedFtraceHandler = unexpectedFtraceHandler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedInterruptHandler")
    public Boolean unexpectedInterruptHandler;
    public KernelRootkit withUnexpectedInterruptHandler(Boolean unexpectedInterruptHandler) {
        this.unexpectedInterruptHandler = unexpectedInterruptHandler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedKernelCodePages")
    public Boolean unexpectedKernelCodePages;
    public KernelRootkit withUnexpectedKernelCodePages(Boolean unexpectedKernelCodePages) {
        this.unexpectedKernelCodePages = unexpectedKernelCodePages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedKprobeHandler")
    public Boolean unexpectedKprobeHandler;
    public KernelRootkit withUnexpectedKprobeHandler(Boolean unexpectedKprobeHandler) {
        this.unexpectedKprobeHandler = unexpectedKprobeHandler;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedProcessesInRunqueue")
    public Boolean unexpectedProcessesInRunqueue;
    public KernelRootkit withUnexpectedProcessesInRunqueue(Boolean unexpectedProcessesInRunqueue) {
        this.unexpectedProcessesInRunqueue = unexpectedProcessesInRunqueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedReadOnlyDataModification")
    public Boolean unexpectedReadOnlyDataModification;
    public KernelRootkit withUnexpectedReadOnlyDataModification(Boolean unexpectedReadOnlyDataModification) {
        this.unexpectedReadOnlyDataModification = unexpectedReadOnlyDataModification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unexpectedSystemCallHandler")
    public Boolean unexpectedSystemCallHandler;
    public KernelRootkit withUnexpectedSystemCallHandler(Boolean unexpectedSystemCallHandler) {
        this.unexpectedSystemCallHandler = unexpectedSystemCallHandler;
        return this;
    }
}