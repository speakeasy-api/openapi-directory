import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KkidAllowancePostSecurity extends SpeakeasyBase {
    authKey: string;
}
/**
 * Sort order:
 *
 * @remarks
 *  * `Add` - Add Allowance
 *  * `Subtract` - Subtract Allowance
 *
 */
export declare enum KkidAllowancePostTransactionTypeEnum {
    Add = "Add",
    Subtract = "Subtract"
}
export declare class KkidAllowancePostRequest extends SpeakeasyBase {
    /**
     * amount you wish to Add/Subtract (subtract value should be a negative value)
     */
    amount: number;
    /**
     * Description (reason) of allowance transaction
     */
    description: string;
    /**
     * userID of the kid
     */
    kidUserId: number;
    /**
     * Transaction Type (Add/Subtract)
     */
    transactionType: KkidAllowancePostTransactionTypeEnum;
}
export declare class KkidAllowancePostResponse extends SpeakeasyBase {
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
     * No Data Returned
     */
    nodata?: shared.Nodata;
    /**
     * search results matching criteria
     */
    success?: shared.Success;
}
