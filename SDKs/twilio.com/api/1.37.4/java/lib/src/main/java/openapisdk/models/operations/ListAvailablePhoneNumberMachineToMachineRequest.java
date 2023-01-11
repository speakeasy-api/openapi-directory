package openapisdk.models.operations;



public class ListAvailablePhoneNumberMachineToMachineRequest {
    public String serverURL;
    public ListAvailablePhoneNumberMachineToMachineRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListAvailablePhoneNumberMachineToMachinePathParams pathParams;
    public ListAvailablePhoneNumberMachineToMachineRequest withPathParams(ListAvailablePhoneNumberMachineToMachinePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListAvailablePhoneNumberMachineToMachineQueryParams queryParams;
    public ListAvailablePhoneNumberMachineToMachineRequest withQueryParams(ListAvailablePhoneNumberMachineToMachineQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAvailablePhoneNumberMachineToMachineSecurity security;
    public ListAvailablePhoneNumberMachineToMachineRequest withSecurity(ListAvailablePhoneNumberMachineToMachineSecurity security) {
        this.security = security;
        return this;
    }
}