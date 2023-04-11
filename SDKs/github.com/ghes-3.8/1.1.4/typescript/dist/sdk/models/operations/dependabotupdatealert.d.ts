import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **Required when `state` is `dismissed`.** A reason for dismissing the alert.
 */
export declare enum DependabotUpdateAlertRequestBodyDismissedReasonEnum {
    FixStarted = "fix_started",
    Inaccurate = "inaccurate",
    NoBandwidth = "no_bandwidth",
    NotUsed = "not_used",
    TolerableRisk = "tolerable_risk"
}
/**
 * The state of the Dependabot alert.
 *
 * @remarks
 * A `dismissed_reason` must be provided when setting the state to `dismissed`.
 */
export declare enum DependabotUpdateAlertRequestBodyStateEnum {
    Dismissed = "dismissed",
    Open = "open"
}
export declare class DependabotUpdateAlertRequestBody extends SpeakeasyBase {
    /**
     * An optional comment associated with dismissing the alert.
     */
    dismissedComment?: string;
    /**
     * **Required when `state` is `dismissed`.** A reason for dismissing the alert.
     */
    dismissedReason?: DependabotUpdateAlertRequestBodyDismissedReasonEnum;
    /**
     * The state of the Dependabot alert.
     *
     * @remarks
     * A `dismissed_reason` must be provided when setting the state to `dismissed`.
     */
    state: DependabotUpdateAlertRequestBodyStateEnum;
}
export declare class DependabotUpdateAlertRequest extends SpeakeasyBase {
    requestBody: DependabotUpdateAlertRequestBody;
    /**
     * The number that identifies a Dependabot alert in its repository.
     *
     * @remarks
     * You can find this at the end of the URL for a Dependabot alert within GitHub,
     * or in `number` fields in the response from the
     * `GET /repos/{owner}/{repo}/dependabot/alerts` operation.
     */
    alertNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class DependabotUpdateAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    dependabotAlert?: shared.DependabotAlert;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
