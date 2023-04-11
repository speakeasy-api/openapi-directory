import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
 */
export declare enum AppPermissionsActionsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
 */
export declare enum AppPermissionsAdministrationEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for checks on code.
 */
export declare enum AppPermissionsChecksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
 */
export declare enum AppPermissionsContentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for deployments and deployment statuses.
 */
export declare enum AppPermissionsDeploymentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for managing repository environments.
 */
export declare enum AppPermissionsEnvironmentsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
 */
export declare enum AppPermissionsIssuesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for organization teams and members.
 */
export declare enum AppPermissionsMembersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
 */
export declare enum AppPermissionsMetadataEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage access to an organization.
 */
export declare enum AppPermissionsOrganizationAdministrationEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage announcement banners for an organization.
 */
export declare enum AppPermissionsOrganizationAnnouncementBannersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage the post-receive hooks for an organization.
 */
export declare enum AppPermissionsOrganizationHooksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for organization packages published to GitHub Packages.
 */
export declare enum AppPermissionsOrganizationPackagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for viewing an organization's plan.
 */
export declare enum AppPermissionsOrganizationPlanEnum {
    Read = "read"
}
/**
 * The level of permission to grant the access token to manage organization projects and projects beta (where available).
 */
export declare enum AppPermissionsOrganizationProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The level of permission to grant the access token to manage organization secrets.
 */
export declare enum AppPermissionsOrganizationSecretsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
 */
export declare enum AppPermissionsOrganizationSelfHostedRunnersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage users blocked by the organization.
 */
export declare enum AppPermissionsOrganizationUserBlockingEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for packages published to GitHub Packages.
 */
export declare enum AppPermissionsPackagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
 */
export declare enum AppPermissionsPagesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
 */
export declare enum AppPermissionsPullRequestsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage announcement banners for a repository.
 */
export declare enum AppPermissionsRepositoryAnnouncementBannersEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage the post-receive hooks for a repository.
 */
export declare enum AppPermissionsRepositoryHooksEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage repository projects, columns, and cards.
 */
export declare enum AppPermissionsRepositoryProjectsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}
/**
 * The level of permission to grant the access token to view and manage secret scanning alerts.
 */
export declare enum AppPermissionsSecretScanningAlertsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage repository secrets.
 */
export declare enum AppPermissionsSecretsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to view and manage security events like code scanning alerts.
 */
export declare enum AppPermissionsSecurityEventsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage just a single file.
 */
export declare enum AppPermissionsSingleFileEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token for commit statuses.
 */
export declare enum AppPermissionsStatusesEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage team discussions and related comments.
 */
export declare enum AppPermissionsTeamDiscussionsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to manage Dependabot alerts.
 */
export declare enum AppPermissionsVulnerabilityAlertsEnum {
    Read = "read",
    Write = "write"
}
/**
 * The level of permission to grant the access token to update GitHub Actions workflow files.
 */
export declare enum AppPermissionsWorkflowsEnum {
    Write = "write"
}
/**
 * The permissions granted to the user-to-server access token.
 */
export declare class AppPermissions extends SpeakeasyBase {
    /**
     * The level of permission to grant the access token for GitHub Actions workflows, workflow runs, and artifacts.
     */
    actions?: AppPermissionsActionsEnum;
    /**
     * The level of permission to grant the access token for repository creation, deletion, settings, teams, and collaborators creation.
     */
    administration?: AppPermissionsAdministrationEnum;
    /**
     * The level of permission to grant the access token for checks on code.
     */
    checks?: AppPermissionsChecksEnum;
    /**
     * The level of permission to grant the access token for repository contents, commits, branches, downloads, releases, and merges.
     */
    contents?: AppPermissionsContentsEnum;
    /**
     * The level of permission to grant the access token for deployments and deployment statuses.
     */
    deployments?: AppPermissionsDeploymentsEnum;
    /**
     * The level of permission to grant the access token for managing repository environments.
     */
    environments?: AppPermissionsEnvironmentsEnum;
    /**
     * The level of permission to grant the access token for issues and related comments, assignees, labels, and milestones.
     */
    issues?: AppPermissionsIssuesEnum;
    /**
     * The level of permission to grant the access token for organization teams and members.
     */
    members?: AppPermissionsMembersEnum;
    /**
     * The level of permission to grant the access token to search repositories, list collaborators, and access repository metadata.
     */
    metadata?: AppPermissionsMetadataEnum;
    /**
     * The level of permission to grant the access token to manage access to an organization.
     */
    organizationAdministration?: AppPermissionsOrganizationAdministrationEnum;
    /**
     * The level of permission to grant the access token to view and manage announcement banners for an organization.
     */
    organizationAnnouncementBanners?: AppPermissionsOrganizationAnnouncementBannersEnum;
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for an organization.
     */
    organizationHooks?: AppPermissionsOrganizationHooksEnum;
    /**
     * The level of permission to grant the access token for organization packages published to GitHub Packages.
     */
    organizationPackages?: AppPermissionsOrganizationPackagesEnum;
    /**
     * The level of permission to grant the access token for viewing an organization's plan.
     */
    organizationPlan?: AppPermissionsOrganizationPlanEnum;
    /**
     * The level of permission to grant the access token to manage organization projects and projects beta (where available).
     */
    organizationProjects?: AppPermissionsOrganizationProjectsEnum;
    /**
     * The level of permission to grant the access token to manage organization secrets.
     */
    organizationSecrets?: AppPermissionsOrganizationSecretsEnum;
    /**
     * The level of permission to grant the access token to view and manage GitHub Actions self-hosted runners available to an organization.
     */
    organizationSelfHostedRunners?: AppPermissionsOrganizationSelfHostedRunnersEnum;
    /**
     * The level of permission to grant the access token to view and manage users blocked by the organization.
     */
    organizationUserBlocking?: AppPermissionsOrganizationUserBlockingEnum;
    /**
     * The level of permission to grant the access token for packages published to GitHub Packages.
     */
    packages?: AppPermissionsPackagesEnum;
    /**
     * The level of permission to grant the access token to retrieve Pages statuses, configuration, and builds, as well as create new builds.
     */
    pages?: AppPermissionsPagesEnum;
    /**
     * The level of permission to grant the access token for pull requests and related comments, assignees, labels, milestones, and merges.
     */
    pullRequests?: AppPermissionsPullRequestsEnum;
    /**
     * The level of permission to grant the access token to view and manage announcement banners for a repository.
     */
    repositoryAnnouncementBanners?: AppPermissionsRepositoryAnnouncementBannersEnum;
    /**
     * The level of permission to grant the access token to manage the post-receive hooks for a repository.
     */
    repositoryHooks?: AppPermissionsRepositoryHooksEnum;
    /**
     * The level of permission to grant the access token to manage repository projects, columns, and cards.
     */
    repositoryProjects?: AppPermissionsRepositoryProjectsEnum;
    /**
     * The level of permission to grant the access token to view and manage secret scanning alerts.
     */
    secretScanningAlerts?: AppPermissionsSecretScanningAlertsEnum;
    /**
     * The level of permission to grant the access token to manage repository secrets.
     */
    secrets?: AppPermissionsSecretsEnum;
    /**
     * The level of permission to grant the access token to view and manage security events like code scanning alerts.
     */
    securityEvents?: AppPermissionsSecurityEventsEnum;
    /**
     * The level of permission to grant the access token to manage just a single file.
     */
    singleFile?: AppPermissionsSingleFileEnum;
    /**
     * The level of permission to grant the access token for commit statuses.
     */
    statuses?: AppPermissionsStatusesEnum;
    /**
     * The level of permission to grant the access token to manage team discussions and related comments.
     */
    teamDiscussions?: AppPermissionsTeamDiscussionsEnum;
    /**
     * The level of permission to grant the access token to manage Dependabot alerts.
     */
    vulnerabilityAlerts?: AppPermissionsVulnerabilityAlertsEnum;
    /**
     * The level of permission to grant the access token to update GitHub Actions workflow files.
     */
    workflows?: AppPermissionsWorkflowsEnum;
}
