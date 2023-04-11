import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Platform where the application is running.
 */
export declare enum VectortileTerraintilesGetClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}
export declare enum VectortileTerraintilesGetTerrainFormatsEnum {
    TerrainFormatUnknown = "TERRAIN_FORMAT_UNKNOWN",
    FirstDerivative = "FIRST_DERIVATIVE",
    SecondDerivative = "SECOND_DERIVATIVE"
}
export declare class VectortileTerraintilesGetRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The precision of terrain altitudes in centimeters. Possible values: between 1 (cm level precision) and 1,000,000 (10-kilometer level precision).
     */
    altitudePrecisionCentimeters?: number;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * API client name and version. For example, the SDK calling the API. The exact format is up to the client.
     */
    clientInfoApiClient?: string;
    /**
     * Application ID, such as the package name on Android and the bundle identifier on iOS platforms.
     */
    clientInfoApplicationId?: string;
    /**
     * Application version number, such as "1.2.3". The exact format is application-dependent.
     */
    clientInfoApplicationVersion?: string;
    /**
     * Device model as reported by the device. The exact format is platform-dependent.
     */
    clientInfoDeviceModel?: string;
    /**
     * Operating system name and version as reported by the OS. For example, "Mac OS X 10.10.4". The exact format is platform-dependent.
     */
    clientInfoOperatingSystem?: string;
    /**
     * Platform where the application is running.
     */
    clientInfoPlatform?: VectortileTerraintilesGetClientInfoPlatformEnum;
    /**
     * Required. A client-generated user ID. The ID should be generated and persisted during the first user session or whenever a pre-existing ID is not found. The exact format is up to the client. This must be non-empty in a GetFeatureTileRequest (whether via the header or GetFeatureTileRequest.client_info).
     */
    clientInfoUserId?: string;
    /**
     * Flag indicating whether 3D building models should be enabled. If this is set structures will be returned as 3D modeled volumes rather than 2.5D extruded areas where possible.
     */
    enableModeledVolumes?: boolean;
    /**
     * Flag indicating whether political features should be returned.
     */
    enablePoliticalFeatures?: boolean;
    /**
     * Flag indicating whether the returned tile will contain road features that are marked private. Private roads are indicated by the Feature.segment_info.road_info.is_private field.
     */
    enablePrivateRoads?: boolean;
    /**
     * Flag indicating whether unclipped buildings should be returned. If this is set, building render ops will extend beyond the tile boundary. Buildings will only be returned on the tile that contains their centroid.
     */
    enableUnclippedBuildings?: boolean;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The BCP-47 language code corresponding to the language in which the name was requested, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * The maximum allowed resolution for the returned elevation heightmap. Possible values: between 1 and 1024 (and not less than min_elevation_resolution_cells). Over-sized heightmaps will be non-uniformly down-sampled such that each edge is no longer than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 100px (width) * 30px (height) max_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)
     */
    maxElevationResolutionCells?: number;
    /**
     *  api-linter: core::0131::request-unknown-fields=disabled aip.dev/not-precedent: Maintaining existing request parameter pattern. The minimum allowed resolution for the returned elevation heightmap. Possible values: between 0 and 1024 (and not more than max_elevation_resolution_cells). Zero is supported for backward compatibility. Under-sized heightmaps will be non-uniformly up-sampled such that each edge is no shorter than this value. Non-uniformity is chosen to maximise the amount of preserved data. For example: Original resolution: 30px (width) * 10px (height) min_elevation_resolution: 30 New resolution: 30px (width) * 30px (height)
     */
    minElevationResolutionCells?: number;
    /**
     * Required. Resource name of the tile. The tile resource name is prefixed by its collection ID `terraintiles/` followed by the resource ID, which encodes the tile's global x and y coordinates and zoom level as `@,,z`. For example, `terraintiles/@1,2,3z`.
     */
    name: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Required. The Unicode country/region code (CLDR) of the location from which the request is coming from, such as "US" and "419". For more information, see http://www.unicode.org/reports/tr35/#unicode_region_subtag.
     */
    regionCode?: string;
    /**
     * Terrain formats that the client understands.
     */
    terrainFormats?: VectortileTerraintilesGetTerrainFormatsEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class VectortileTerraintilesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    terrainTile?: shared.TerrainTile;
}
