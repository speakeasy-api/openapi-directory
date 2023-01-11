package openapisdk.models.operations;



public class VirtualizationVirtualMachinesCreateResponse {
    public String contentType;
    public VirtualizationVirtualMachinesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationVirtualMachinesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachine virtualMachine;
    public VirtualizationVirtualMachinesCreateResponse withVirtualMachine(openapisdk.models.shared.VirtualMachine virtualMachine) {
        this.virtualMachine = virtualMachine;
        return this;
    }
}