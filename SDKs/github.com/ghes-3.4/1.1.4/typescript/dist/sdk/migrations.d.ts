import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Move projects to or from GitHub.
 */
export declare class Migrations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an organization migration archive
     *
     * @remarks
     * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#delete-an-organization-migration-archive} - API method documentation
     */
    migrationsDeleteArchiveForOrg(req: operations.MigrationsDeleteArchiveForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsDeleteArchiveForOrgResponse>;
    /**
     * Download an organization migration archive
     *
     * @remarks
     * Fetches the URL to a migration archive.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#download-an-organization-migration-archive} - API method documentation
     */
    migrationsDownloadArchiveForOrg(req: operations.MigrationsDownloadArchiveForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsDownloadArchiveForOrgResponse>;
    /**
     * Download a user migration archive
     *
     * @remarks
     * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
     *
     * *   attachments
     * *   bases
     * *   commit\_comments
     * *   issue\_comments
     * *   issue\_events
     * *   issues
     * *   milestones
     * *   organizations
     * *   projects
     * *   protected\_branches
     * *   pull\_request\_reviews
     * *   pull\_requests
     * *   releases
     * *   repositories
     * *   review\_comments
     * *   schema
     * *   users
     *
     * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/users#download-a-user-migration-archive} - API method documentation
     */
    migrationsGetArchiveForAuthenticatedUser(req: operations.MigrationsGetArchiveForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetArchiveForAuthenticatedUserResponse>;
    /**
     * Get an organization migration status
     *
     * @remarks
     * Fetches the status of a migration.
     *
     * The `state` of a migration can be one of the following values:
     *
     * *   `pending`, which means the migration hasn't started yet.
     * *   `exporting`, which means the migration is in progress.
     * *   `exported`, which means the migration finished successfully.
     * *   `failed`, which means the migration failed.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#get-an-organization-migration-status} - API method documentation
     */
    migrationsGetStatusForOrg(req: operations.MigrationsGetStatusForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsGetStatusForOrgResponse>;
    /**
     * List user migrations
     *
     * @remarks
     * Lists all migrations a user has started.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/users#list-user-migrations} - API method documentation
     */
    migrationsListForAuthenticatedUser(req: operations.MigrationsListForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListForAuthenticatedUserResponse>;
    /**
     * List organization migrations
     *
     * @remarks
     * Lists the most recent migrations, including both exports (which can be started through the REST API) and imports (which cannot be started using the REST API).
     *
     * A list of `repositories` is only returned for export migrations.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#list-organization-migrations} - API method documentation
     */
    migrationsListForOrg(req: operations.MigrationsListForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListForOrgResponse>;
    /**
     * List repositories for a user migration
     *
     * @remarks
     * Lists all the repositories for this user migration.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/users#list-repositories-for-a-user-migration} - API method documentation
     */
    migrationsListReposForAuthenticatedUser(req: operations.MigrationsListReposForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListReposForAuthenticatedUserResponse>;
    /**
     * List repositories in an organization migration
     *
     * @remarks
     * List all the repositories for this organization migration.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#list-repositories-in-an-organization-migration} - API method documentation
     */
    migrationsListReposForOrg(req: operations.MigrationsListReposForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsListReposForOrgResponse>;
    /**
     * Start a user migration
     *
     * @remarks
     * Initiates the generation of a user migration archive.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/users#start-a-user-migration} - API method documentation
     */
    migrationsStartForAuthenticatedUser(req: operations.MigrationsStartForAuthenticatedUserRequestBody, config?: AxiosRequestConfig): Promise<operations.MigrationsStartForAuthenticatedUserResponse>;
    /**
     * Start an organization migration
     *
     * @remarks
     * Initiates the generation of a migration archive.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#start-an-organization-migration} - API method documentation
     */
    migrationsStartForOrg(req: operations.MigrationsStartForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsStartForOrgResponse>;
    /**
     * Unlock an organization repository
     *
     * @remarks
     * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/enterprise-server@3.4/rest/repos/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.4/rest/migrations/orgs#unlock-an-organization-repository} - API method documentation
     */
    migrationsUnlockRepoForOrg(req: operations.MigrationsUnlockRepoForOrgRequest, config?: AxiosRequestConfig): Promise<operations.MigrationsUnlockRepoForOrgResponse>;
}
