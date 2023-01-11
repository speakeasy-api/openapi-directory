import { SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";
import { Track } from "./track";
/**
 * Soundcloud Playlist Object
**/
export declare class Playlist extends SpeakeasyBase {
    artworkUrl?: string;
    createdAt?: string;
    description?: string;
    downloadable?: boolean;
    duration?: number;
    ean?: string;
    embeddableBy?: string;
    genre?: string;
    id?: number;
    kind?: string;
    label?: MetaUser;
    labelId?: number;
    labelName?: string;
    lastModified?: string;
    license?: string;
    likesCount?: number;
    permalink?: string;
    permalinkUrl?: string;
    playlistType?: string;
    purchaseTitle?: string;
    purchaseUrl?: string;
    release?: string;
    releaseDay?: number;
    releaseMonth?: number;
    releaseYear?: number;
    sharing?: string;
    streamable?: boolean;
    tagList?: string;
    tags?: string;
    title?: string;
    trackCount?: number;
    tracks?: Track[];
    tracksUri?: string;
    type?: string;
    uri?: string;
    user?: MetaUser;
    userId?: number;
}
