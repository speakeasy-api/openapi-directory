package openapisdk.models.operations;



public class VirtualizationInterfacesUpdateResponse {
    public String contentType;
    public VirtualizationInterfacesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationInterfacesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface;
    public VirtualizationInterfacesUpdateResponse withVirtualMachineInterface(openapisdk.models.shared.VirtualMachineInterface virtualMachineInterface) {
        this.virtualMachineInterface = virtualMachineInterface;
        return this;
    }
}