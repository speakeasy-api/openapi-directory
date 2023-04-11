import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateSynonymsRequestBody extends SpeakeasyBase {
    harryPotter?: string[];
    hp?: string[];
}
export declare class UpdateSynonymsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
