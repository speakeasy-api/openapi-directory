import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCommentOverview } from "./enterprisecommentoverview";
import { EnterpriseGistOverview } from "./enterprisegistoverview";
import { EnterpriseHookOverview } from "./enterprisehookoverview";
import { EnterpriseIssueOverview } from "./enterpriseissueoverview";
import { EnterpriseMilestoneOverview } from "./enterprisemilestoneoverview";
import { EnterpriseOrganizationOverview } from "./enterpriseorganizationoverview";
import { EnterprisePageOverview } from "./enterprisepageoverview";
import { EnterprisePullRequestOverview } from "./enterprisepullrequestoverview";
import { EnterpriseRepositoryOverview } from "./enterpriserepositoryoverview";
import { EnterpriseUserOverview } from "./enterpriseuseroverview";
/**
 * Response
 */
export declare class EnterpriseOverview extends SpeakeasyBase {
    comments?: EnterpriseCommentOverview;
    gists?: EnterpriseGistOverview;
    hooks?: EnterpriseHookOverview;
    issues?: EnterpriseIssueOverview;
    milestones?: EnterpriseMilestoneOverview;
    orgs?: EnterpriseOrganizationOverview;
    pages?: EnterprisePageOverview;
    pulls?: EnterprisePullRequestOverview;
    repos?: EnterpriseRepositoryOverview;
    users?: EnterpriseUserOverview;
}
