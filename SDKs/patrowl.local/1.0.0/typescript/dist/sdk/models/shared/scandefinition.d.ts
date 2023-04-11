import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScanDefinitionAssetsCriticityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare enum ScanDefinitionAssetsDatatypeEnum {
    Ip = "ip",
    IpRange = "ip-range",
    IpSubnet = "ip-subnet",
    Fqdn = "fqdn",
    Domain = "domain",
    Url = "url",
    Keyword = "keyword",
    Person = "person",
    Organisation = "organisation",
    Path = "path",
    Application = "application"
}
export declare class ScanDefinitionAssets extends SpeakeasyBase {
    criticity?: ScanDefinitionAssetsCriticityEnum;
    datatype?: ScanDefinitionAssetsDatatypeEnum;
    id?: string;
    value?: string;
}
export declare class ScanDefinition extends SpeakeasyBase {
    assets?: ScanDefinitionAssets[];
    options?: Record<string, any>;
    scanId?: number;
}
