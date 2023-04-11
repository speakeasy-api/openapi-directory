import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationEarlyAccessFeaturesOptInRequest extends SpeakeasyBase {
    optInId: string;
    organizationId: string;
}
export declare class DeleteOrganizationEarlyAccessFeaturesOptInResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
