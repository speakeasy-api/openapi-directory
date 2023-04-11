import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationSamlIdpRequest extends SpeakeasyBase {
    idpId: string;
    organizationId: string;
}
export declare class DeleteOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
