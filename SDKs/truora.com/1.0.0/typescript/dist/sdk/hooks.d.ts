import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Hooks allows configuring Truora Platform to notify via requests to your service (or another third-party service) whenever an event occurs in Truora Platform. They are the easiest way to get a warning when something happens in another system, in this case, Truora platform. This service allows sending notifications via requests to your service or another third-party service whenever certain events occur.
 */
export declare class Hooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a hook subscription
     *
     * @remarks
     * Creates a hook subscription to notify events in Truora plataform. Subscriptions broadcast data as events occur and additional subscription instances are not required in order to refresh the information. Events are received in an array as a JWT and are decoded using the signing key returned by this endpoint. Their structure is as follows:
     *
     * ```
     * {
     *     "events": [
     *         {
     *             "event_action": "created",
     *             "event_type": "check",
     *             "id": "HKEdd28c569cf5eb74e45f0f4c092096e62c1c95ba2",
     *             "object": {
     *                 "check_id": "CHK9c39003424c521aec8566ce59e1ddc86",
     *                 "country": "CO",
     *                 "creation_date": "2020-04-01T23:00:30.581232281Z",
     *                 "homonym_score": 0,
     *                 "id_score": 0,
     *                 "national_id": "1151959906",
     *                 "previous_check": "CHK4ec814fecd147eaae41027081d7d5caf",
     *                 "score": -1,
     *                 "status": "not_started",
     *                 "type": "person",
     *                 "update_date": "2020-04-01T23:00:30.680937413Z"
     *             },
     *             "timestamp": "2020-04-01T23:00:30Z",
     *             "version": "1.0"
     *         }
     *     ],
     *     "iat": 1585782031,
     *     "iss": "Truora"
     * }
     * ```
     *
     * Keep in mind that the object attribute varies depending on the event_type.
     */
    createHook(req: shared.CreateHookInput, security: operations.CreateHookSecurity, config?: AxiosRequestConfig): Promise<operations.CreateHookResponse>;
    /**
     * Deletes hook
     *
     * @remarks
     * Deletes hook configuration.
     */
    deletHook(req: operations.DeletHookRequest, security: operations.DeletHookSecurity, config?: AxiosRequestConfig): Promise<operations.DeletHookResponse>;
    /**
     * Lists all hooks
     *
     * @remarks
     * Lists all the configured hooks in your account.
     */
    listHook(config?: AxiosRequestConfig): Promise<operations.ListHookResponse>;
    /**
     * Updates hook
     *
     * @remarks
     * Updates a hook configuration.
     */
    updateHook(req: operations.UpdateHookRequest, security: operations.UpdateHookSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateHookResponse>;
}
