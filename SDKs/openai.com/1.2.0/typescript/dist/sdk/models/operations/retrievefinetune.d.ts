import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveFineTuneRequest extends SpeakeasyBase {
    /**
     * The ID of the fine-tune job
     *
     * @remarks
     *
     */
    fineTuneId: string;
}
export declare class RetrieveFineTuneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fineTune?: shared.FineTune;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
