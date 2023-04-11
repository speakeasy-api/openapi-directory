import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the deobfuscation file.
 */
export declare enum DeobfuscationFileSymbolTypeEnum {
    DeobfuscationFileTypeUnspecified = "deobfuscationFileTypeUnspecified",
    Proguard = "proguard",
    NativeCode = "nativeCode"
}
/**
 * Represents a deobfuscation file.
 */
export declare class DeobfuscationFile extends SpeakeasyBase {
    /**
     * The type of the deobfuscation file.
     */
    symbolType?: DeobfuscationFileSymbolTypeEnum;
}
