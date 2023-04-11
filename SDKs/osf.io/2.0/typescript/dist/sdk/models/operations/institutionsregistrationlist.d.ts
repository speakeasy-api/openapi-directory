import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class InstitutionsRegistrationListRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the institution you wish to retrieve.
     */
    institutionId: string;
}
export declare class InstitutionsRegistrationListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
