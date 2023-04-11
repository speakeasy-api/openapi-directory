import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelFineTuneRequest extends SpeakeasyBase {
    /**
     * The ID of the fine-tune job to cancel
     *
     * @remarks
     *
     */
    fineTuneId: string;
}
export declare class CancelFineTuneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    fineTune?: shared.FineTune;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
