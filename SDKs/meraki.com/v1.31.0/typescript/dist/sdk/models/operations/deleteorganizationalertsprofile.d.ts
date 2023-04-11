import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationAlertsProfileRequest extends SpeakeasyBase {
    alertConfigId: string;
    organizationId: string;
}
export declare class DeleteOrganizationAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
