package openapisdk.models.operations;



public class VirtualizationInterfacesReadResponse {
    public String contentType;
    public VirtualizationInterfacesReadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesReadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface;
    public VirtualizationInterfacesReadResponse withVirtualMachineInterface(openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface) {
        this.virtualMachineInterface = virtualMachineInterface;
        return this;
    }
}