import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorData } from "./errordata";
import { LocalisationDetails } from "./localisationdetails";
export declare enum ErrorLocationTypeEnum {
    RequestBody = "requestBody",
    QueryParam = "queryParam",
    RequestParam = "requestParam",
    Header = "header",
    PathParam = "pathParam"
}
export declare class ErrorT extends SpeakeasyBase {
    errorCode?: string;
    errorData?: ErrorData;
    errorMessage?: string;
    localisationDetails?: LocalisationDetails;
    location?: string;
    locationType?: ErrorLocationTypeEnum;
    reasonCode?: string;
}
