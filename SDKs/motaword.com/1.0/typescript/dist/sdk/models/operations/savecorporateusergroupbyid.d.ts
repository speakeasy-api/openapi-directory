import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveCorporateUserGroupByIdRequest extends SpeakeasyBase {
    userGroup: shared.UserGroup;
    /**
     * Corporate ID
     */
    corporateId: number;
}
export declare class SaveCorporateUserGroupByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User group list
     */
    userGroup?: shared.UserGroup;
}
