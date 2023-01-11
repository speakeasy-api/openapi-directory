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
    public openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext;
    public VirtualizationVirtualMachinesCreateResponse withVirtualMachineWithConfigContext(openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext) {
        this.virtualMachineWithConfigContext = virtualMachineWithConfigContext;
        return this;
    }
}