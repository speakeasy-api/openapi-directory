package openapisdk.models.operations;



public class VirtualizationInterfacesCreateResponse {
    public String contentType;
    public VirtualizationInterfacesCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface;
    public VirtualizationInterfacesCreateResponse withVirtualMachineInterface(openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface) {
        this.virtualMachineInterface = virtualMachineInterface;
        return this;
    }
}