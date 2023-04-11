import { SpeakeasyBase } from "../../../internal/utils";
export declare class Subject extends SpeakeasyBase {
    /**
     * `"": ""` Algorithms can be e.g. sha256, sha512 See https://github.com/in-toto/attestation/blob/main/spec/field_types.md#DigestSet
     */
    digest?: Record<string, string>;
    name?: string;
}
