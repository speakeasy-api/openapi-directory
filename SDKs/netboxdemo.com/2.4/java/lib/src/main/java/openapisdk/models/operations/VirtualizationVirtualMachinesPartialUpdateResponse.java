package openapisdk.models.operations;



public class VirtualizationVirtualMachinesPartialUpdateResponse {
    public String contentType;
    public VirtualizationVirtualMachinesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationVirtualMachinesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachine virtualMachine;
    public VirtualizationVirtualMachinesPartialUpdateResponse withVirtualMachine(openapisdk.models.shared.VirtualMachine virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}