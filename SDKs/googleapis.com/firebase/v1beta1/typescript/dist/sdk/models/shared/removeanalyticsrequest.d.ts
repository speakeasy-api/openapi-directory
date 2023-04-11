import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveAnalyticsRequest extends SpeakeasyBase {
    /**
     * Optional. The ID of the Google Analytics property associated with the specified `FirebaseProject`. - If not set, then the Google Analytics property that is currently associated with the specified `FirebaseProject` is removed. - If set, and the specified `FirebaseProject` is currently associated with a *different* Google Analytics property, then the response is a `412 Precondition Failed` error.
     */
    analyticsPropertyId?: string;
}
