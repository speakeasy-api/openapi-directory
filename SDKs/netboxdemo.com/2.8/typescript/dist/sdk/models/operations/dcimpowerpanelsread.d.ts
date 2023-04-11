import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimPowerPanelsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this power panel.
     */
    id: number;
}
export declare class DcimPowerPanelsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
