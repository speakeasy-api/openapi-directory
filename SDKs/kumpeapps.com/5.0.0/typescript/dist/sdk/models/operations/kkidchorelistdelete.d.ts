import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidChorelistDeleteSecurity extends SpeakeasyBase {
    authKey: string;
}
export declare class KkidChorelistDeleteRequest extends SpeakeasyBase {
    /**
     * id of the chore you wish to delete
     */
    idChoreList: number;
}
export declare class KkidChorelistDeleteResponse extends SpeakeasyBase {
    /**
     * Method Not Allowed- API user does not have access to use this method
     */
    fourHundredAndFive?: shared.FourHundredAndFive;
    /**
     * API Access Denied! Your API key is invalid, expired, or not supplied!
     */
    fourHundredAndTwelve?: shared.FourHundredAndTwelve;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No Data Found.
     */
    nodata?: shared.Nodata;
    /**
     * deletion successful
     */
    success?: shared.Success;
}
