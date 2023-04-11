import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DependencyGraphDiffChangeTypeEnum {
    Added = "added",
    Removed = "removed"
}
export declare class DependencyGraphDiffVulnerabilities extends SpeakeasyBase {
    advisoryGhsaId: string;
    advisorySummary: string;
    advisoryUrl: string;
    severity: string;
}
export declare class DependencyGraphDiff extends SpeakeasyBase {
    changeType: DependencyGraphDiffChangeTypeEnum;
    ecosystem: string;
    license: string;
    manifest: string;
    name: string;
    packageUrl: string;
    sourceRepositoryUrl: string;
    version: string;
    vulnerabilities: DependencyGraphDiffVulnerabilities[];
}
