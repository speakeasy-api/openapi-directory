package openapisdk.models.operations;



public class VirtualizationVirtualMachinesReadResponse {
    public String contentType;
    public VirtualizationVirtualMachinesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationVirtualMachinesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext;
    public VirtualizationVirtualMachinesReadResponse withVirtualMachineWithConfigContext(openapisdk.models.shared.VirtualMachineWithConfigContext virtualMachineWithConfigContext) {
        this.virtualMachineWithConfigContext = virtualMachineWithConfigContext;
        return this;
    }
}