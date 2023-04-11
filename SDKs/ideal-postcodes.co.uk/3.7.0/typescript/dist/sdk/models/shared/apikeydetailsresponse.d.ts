import { SpeakeasyBase } from "../../../internal/utils";
import { ApiKeyDetails } from "./apikeydetails";
export declare enum ApiKeyDetailsResponseCodeEnum {
    TwoThousand = "2000"
}
export declare enum ApiKeyDetailsResponseMessageEnum {
    Success = "Success"
}
/**
 * Success
 */
export declare class ApiKeyDetailsResponse extends SpeakeasyBase {
    code: ApiKeyDetailsResponseCodeEnum;
    message: ApiKeyDetailsResponseMessageEnum;
    result: ApiKeyDetails;
}
