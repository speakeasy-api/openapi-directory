package openapisdk.models.operations;



public class VirtualizationVirtualMachinesListResponse {
    public String contentType;
    public VirtualizationVirtualMachinesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VirtualizationVirtualMachinesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public VirtualizationVirtualMachinesList200ApplicationJson virtualizationVirtualMachinesList200ApplicationJSONObject;
    public VirtualizationVirtualMachinesListResponse withVirtualizationVirtualMachinesList200ApplicationJsonObject(VirtualizationVirtualMachinesList200ApplicationJson virtualizationVirtualMachinesList200ApplicationJSONObject) {
        this.virtualizationVirtualMachinesList200ApplicationJSONObject = virtualizationVirtualMachinesList200ApplicationJSONObject;
        return this;
    }
}