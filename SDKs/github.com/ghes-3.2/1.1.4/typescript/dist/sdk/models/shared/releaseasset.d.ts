import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * State of the release asset.
 */
export declare enum ReleaseAssetStateEnum {
    Uploaded = "uploaded",
    Open = "open"
}
/**
 * Data related to a release.
 */
export declare class ReleaseAsset extends SpeakeasyBase {
    browserDownloadUrl: string;
    contentType: string;
    createdAt: Date;
    downloadCount: number;
    id: number;
    label: string;
    /**
     * The file name of the asset.
     */
    name: string;
    nodeId: string;
    size: number;
    /**
     * State of the release asset.
     */
    state: ReleaseAssetStateEnum;
    updatedAt: Date;
    /**
     * Simple User
     */
    uploader: NullableSimpleUser;
    url: string;
}
