import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDrugByIDRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    drugIDPathParameter: string;
    /**
     * An ID in the drug index.
     */
    drugIdQueryParameter: string;
}
export declare class GetDrugByIDResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
