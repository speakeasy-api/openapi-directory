import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateWorkweekConfigSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class UpdateWorkweekConfigRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    updateWorkweekConfigRequest: shared.UpdateWorkweekConfigRequest;
    /**
     * The UUID for the `WorkweekConfig` object being updated.
     */
    id: string;
}
export declare class UpdateWorkweekConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateWorkweekConfigResponse?: shared.UpdateWorkweekConfigResponse;
}
