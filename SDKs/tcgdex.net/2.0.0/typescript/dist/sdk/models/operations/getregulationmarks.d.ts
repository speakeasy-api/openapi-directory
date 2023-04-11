import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRegulationMarksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List the current regulation marks
     */
    getRegulationMarks200ApplicationJSONStrings?: string[];
}
