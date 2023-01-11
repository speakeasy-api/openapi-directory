package openapisdk.models.operations;



public class VirtualizationInterfacesPartialUpdateResponse {
    public String contentType;
    public VirtualizationInterfacesPartialUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesPartialUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface;
    public VirtualizationInterfacesPartialUpdateResponse withVirtualMachineInterface(openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface) {
        this.virtualMachineInterface = virtualMachineInterface;
        return this;
    }
}