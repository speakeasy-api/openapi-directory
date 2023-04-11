import { APIInformation } from "./apiinformation";
import * as shared from "./models/shared";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://positioning.hereapi.com/v2", "https://az.positioning.hereapi.com/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Positioning API accepts requests with radio network measurements and replies with corresponding location estimate. For more details and examples, see [Developer's Guide](https://developer.here.com/documentation/positioning). Cellular measurements are given in terms defined in 3GPP and 3GGP2 specifications, see the corresponsing documentation at http://www.3gpp.org.
 *
 * @remarks
 *
 * Breaking changes from v1:
 *   - JSON fields
 *     `altaccuracy`, `baselat`, `baselng`, `cellparams`, `pilotpower`, `pnoffset`, `powrx`, `rxlevel`,
 *     have been deprecated and replaced with
 *     `altAccuracy`, `baseLat`, `baseLng`, `cellParams`, `pilotPower`, `pnOffset`, `rss`, `rxLevel`
 *     respectively.
 *   - Dependent parameters combined as a subobject.
 *     - CDMA, GSM, WCDMA, TD-SCDMA and LTE local identification parameters for serving cell moved under `localId` property.
 *     - GSM neighbor global ID: `lac` and `cid` for neighbor cell moved under `globalIdentity` property.
 *
 */
export declare class SDK {
    /**
     * Additional API Information
     */
    apiInformation: APIInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
