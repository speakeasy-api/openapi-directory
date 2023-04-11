import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratedAssetPackSlice } from "./generatedassetpackslice";
import { GeneratedSplitApk } from "./generatedsplitapk";
import { GeneratedStandaloneApk } from "./generatedstandaloneapk";
import { GeneratedUniversalApk } from "./generateduniversalapk";
/**
 * Download metadata for split, standalone and universal APKs, as well as asset pack slices, signed with a given key.
 */
export declare class GeneratedApksPerSigningKey extends SpeakeasyBase {
    /**
     * SHA256 hash of the APK signing public key certificate.
     */
    certificateSha256Hash?: string;
    /**
     * List of asset pack slices which will be served for this app bundle, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedAssetPackSlices?: GeneratedAssetPackSlice[];
    /**
     * List of generated split APKs, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedSplitApks?: GeneratedSplitApk[];
    /**
     * List of generated standalone APKs, signed with a key corresponding to certificate_sha256_hash.
     */
    generatedStandaloneApks?: GeneratedStandaloneApk[];
    /**
     * Download metadata for a universal APK.
     */
    generatedUniversalApk?: GeneratedUniversalApk;
}
