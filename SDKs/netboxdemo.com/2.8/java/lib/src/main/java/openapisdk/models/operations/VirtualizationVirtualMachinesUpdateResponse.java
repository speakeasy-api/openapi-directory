package openapisdk.models.operations;



public class VirtualizationVirtualMachinesUpdateResponse {
    public String contentType;
    public VirtualizationVirtualMachinesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationVirtualMachinesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext;
    public VirtualizationVirtualMachinesUpdateResponse withVirtualMachineWithConfigContext(openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext) {
        this.virtualMachineWithConfigContext = virtualMachineWithConfigContext;
        return this;
    }
}