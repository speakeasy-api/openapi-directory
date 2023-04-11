import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CloneOrganizationRequestBody extends SpeakeasyBase {
    /**
     * The name of the new organization
     */
    name: string;
}
export declare class CloneOrganizationRequest extends SpeakeasyBase {
    requestBody: CloneOrganizationRequestBody;
    organizationId: string;
}
export declare class CloneOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    cloneOrganization201ApplicationJSONObject?: Record<string, any>;
}
