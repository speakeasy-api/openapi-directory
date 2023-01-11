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
    public openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext;
    public VirtualizationVirtualMachinesPartialUpdateResponse withVirtualMachineWithConfigContext(openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext) {
        this.virtualMachineWithConfigContext = virtualMachineWithConfigContext;
        return this;
    }
}