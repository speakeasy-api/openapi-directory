import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFineTuneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fineTune?: shared.FineTune;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
