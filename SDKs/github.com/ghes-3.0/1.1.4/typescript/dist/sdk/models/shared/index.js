"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./actionsenterprisepermissions"), exports);
__exportStar(require("./actionsorganizationpermissions"), exports);
__exportStar(require("./actionspublickey"), exports);
__exportStar(require("./actionsrepositorypermissions"), exports);
__exportStar(require("./actionssecret"), exports);
__exportStar(require("./actor"), exports);
__exportStar(require("./addedtoprojectissueevent"), exports);
__exportStar(require("./allowedactionsenum"), exports);
__exportStar(require("./announcement"), exports);
__exportStar(require("./apioverview"), exports);
__exportStar(require("./applicationgrant"), exports);
__exportStar(require("./apppermissions"), exports);
__exportStar(require("./artifact"), exports);
__exportStar(require("./assignedissueevent"), exports);
__exportStar(require("./authenticationtoken"), exports);
__exportStar(require("./authorassociationenum"), exports);
__exportStar(require("./authorization"), exports);
__exportStar(require("./basegist"), exports);
__exportStar(require("./basicerror"), exports);
__exportStar(require("./blob"), exports);
__exportStar(require("./branchprotection"), exports);
__exportStar(require("./branchrestrictionpolicy"), exports);
__exportStar(require("./branchshort"), exports);
__exportStar(require("./branchwithprotection"), exports);
__exportStar(require("./checkannotation"), exports);
__exportStar(require("./checkrun"), exports);
__exportStar(require("./checksuite"), exports);
__exportStar(require("./checksuitepreference"), exports);
__exportStar(require("./codeofconduct"), exports);
__exportStar(require("./codeofconductsimple"), exports);
__exportStar(require("./codescanningalert"), exports);
__exportStar(require("./codescanningalertclassificationenum"), exports);
__exportStar(require("./codescanningalertdismissedreasonenum"), exports);
__exportStar(require("./codescanningalertinstance"), exports);
__exportStar(require("./codescanningalertitems"), exports);
__exportStar(require("./codescanningalertlocation"), exports);
__exportStar(require("./codescanningalertrule"), exports);
__exportStar(require("./codescanningalertrulesummary"), exports);
__exportStar(require("./codescanningalertsetstateenum"), exports);
__exportStar(require("./codescanningalertstateenum"), exports);
__exportStar(require("./codescanninganalysis"), exports);
__exportStar(require("./codescanninganalysistool"), exports);
__exportStar(require("./codescanningsarifsreceipt"), exports);
__exportStar(require("./codesearchresultitem"), exports);
__exportStar(require("./collaborator"), exports);
__exportStar(require("./combinedcommitstatus"), exports);
__exportStar(require("./commit"), exports);
__exportStar(require("./commitactivity"), exports);
__exportStar(require("./commitcomment"), exports);
__exportStar(require("./commitcomparison"), exports);
__exportStar(require("./commitsearchresultitem"), exports);
__exportStar(require("./configurationstatus"), exports);
__exportStar(require("./contentdirectory"), exports);
__exportStar(require("./contentfile"), exports);
__exportStar(require("./contentreferenceattachment"), exports);
__exportStar(require("./contentsubmodule"), exports);
__exportStar(require("./contentsymlink"), exports);
__exportStar(require("./contenttree"), exports);
__exportStar(require("./contributor"), exports);
__exportStar(require("./contributoractivity"), exports);
__exportStar(require("./convertednotetoissueissueevent"), exports);
__exportStar(require("./demilestonedissueevent"), exports);
__exportStar(require("./deploykey"), exports);
__exportStar(require("./deployment"), exports);
__exportStar(require("./deploymentsimple"), exports);
__exportStar(require("./deploymentstatus"), exports);
__exportStar(require("./diffentry"), exports);
__exportStar(require("./directionenum"), exports);
__exportStar(require("./email"), exports);
__exportStar(require("./enabledorganizationsenum"), exports);
__exportStar(require("./enabledrepositoriesenum"), exports);
__exportStar(require("./enterprise"), exports);
__exportStar(require("./enterprisecommentoverview"), exports);
__exportStar(require("./enterprisegistoverview"), exports);
__exportStar(require("./enterprisehookoverview"), exports);
__exportStar(require("./enterpriseissueoverview"), exports);
__exportStar(require("./enterprisemilestoneoverview"), exports);
__exportStar(require("./enterpriseorganizationoverview"), exports);
__exportStar(require("./enterpriseoverview"), exports);
__exportStar(require("./enterprisepageoverview"), exports);
__exportStar(require("./enterprisepullrequestoverview"), exports);
__exportStar(require("./enterpriserepositoryoverview"), exports);
__exportStar(require("./enterprisesettings"), exports);
__exportStar(require("./enterpriseuseroverview"), exports);
__exportStar(require("./event"), exports);
__exportStar(require("./feed"), exports);
__exportStar(require("./filecommit"), exports);
__exportStar(require("./fullrepository"), exports);
__exportStar(require("./gistcomment"), exports);
__exportStar(require("./gistcommit"), exports);
__exportStar(require("./gisthistory"), exports);
__exportStar(require("./gistsimple"), exports);
__exportStar(require("./gitcommit"), exports);
__exportStar(require("./gitignoretemplate"), exports);
__exportStar(require("./gitref"), exports);
__exportStar(require("./gittag"), exports);
__exportStar(require("./gittree"), exports);
__exportStar(require("./globalhook"), exports);
__exportStar(require("./globalhook2"), exports);
__exportStar(require("./gpgkey"), exports);
__exportStar(require("./hook"), exports);
__exportStar(require("./hookresponse"), exports);
__exportStar(require("./hovercard"), exports);
__exportStar(require("./installation"), exports);
__exportStar(require("./installationtoken"), exports);
__exportStar(require("./integration"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./issuecomment"), exports);
__exportStar(require("./issueevent"), exports);
__exportStar(require("./issueeventdismissedreview"), exports);
__exportStar(require("./issueeventlabel"), exports);
__exportStar(require("./issueeventmilestone"), exports);
__exportStar(require("./issueeventprojectcard"), exports);
__exportStar(require("./issueeventrename"), exports);
__exportStar(require("./issuesearchresultitem"), exports);
__exportStar(require("./job"), exports);
__exportStar(require("./key"), exports);
__exportStar(require("./keysimple"), exports);
__exportStar(require("./label"), exports);
__exportStar(require("./labeledissueevent"), exports);
__exportStar(require("./labelsearchresultitem"), exports);
__exportStar(require("./ldapmappingteam"), exports);
__exportStar(require("./ldapmappinguser"), exports);
__exportStar(require("./license"), exports);
__exportStar(require("./licensecontent"), exports);
__exportStar(require("./licenseinfo"), exports);
__exportStar(require("./licensesimple"), exports);
__exportStar(require("./link"), exports);
__exportStar(require("./linkwithtype"), exports);
__exportStar(require("./lockedissueevent"), exports);
__exportStar(require("./maintenancestatus"), exports);
__exportStar(require("./milestone"), exports);
__exportStar(require("./milestonedissueevent"), exports);
__exportStar(require("./minimalrepository"), exports);
__exportStar(require("./movedcolumninprojectissueevent"), exports);
__exportStar(require("./nullableauthorization"), exports);
__exportStar(require("./nullablecollaborator"), exports);
__exportStar(require("./nullablegituser"), exports);
__exportStar(require("./nullableintegration"), exports);
__exportStar(require("./nullableissue"), exports);
__exportStar(require("./nullablelicensesimple"), exports);
__exportStar(require("./nullablemilestone"), exports);
__exportStar(require("./nullablerepository"), exports);
__exportStar(require("./nullablescopedinstallation"), exports);
__exportStar(require("./nullablesimplecommit"), exports);
__exportStar(require("./nullablesimpleuser"), exports);
__exportStar(require("./nullableteamsimple"), exports);
__exportStar(require("./orderenum"), exports);
__exportStar(require("./organizationactionssecret"), exports);
__exportStar(require("./organizationfull"), exports);
__exportStar(require("./organizationsimple"), exports);
__exportStar(require("./orghook"), exports);
__exportStar(require("./orgmembership"), exports);
__exportStar(require("./orgprereceivehook"), exports);
__exportStar(require("./page"), exports);
__exportStar(require("./pagebuild"), exports);
__exportStar(require("./pagebuildstatus"), exports);
__exportStar(require("./pageshttpscertificate"), exports);
__exportStar(require("./pagessourcehash"), exports);
__exportStar(require("./participationstats"), exports);
__exportStar(require("./prereceiveenvironment"), exports);
__exportStar(require("./prereceiveenvironmentdownloadstatus"), exports);
__exportStar(require("./prereceivehook"), exports);
__exportStar(require("./privateuser"), exports);
__exportStar(require("./project"), exports);
__exportStar(require("./projectcard"), exports);
__exportStar(require("./projectcollaboratorpermission"), exports);
__exportStar(require("./projectcolumn"), exports);
__exportStar(require("./protectedbranch"), exports);
__exportStar(require("./protectedbranchadminenforced"), exports);
__exportStar(require("./protectedbranchpullrequestreview"), exports);
__exportStar(require("./protectedbranchrequiredstatuscheck"), exports);
__exportStar(require("./publickeyfull"), exports);
__exportStar(require("./publicuser"), exports);
__exportStar(require("./pullrequest"), exports);
__exportStar(require("./pullrequestmergeresult"), exports);
__exportStar(require("./pullrequestminimal"), exports);
__exportStar(require("./pullrequestreview"), exports);
__exportStar(require("./pullrequestreviewcomment"), exports);
__exportStar(require("./pullrequestreviewrequest"), exports);
__exportStar(require("./pullrequestsimple"), exports);
__exportStar(require("./ratelimit"), exports);
__exportStar(require("./ratelimitoverview"), exports);
__exportStar(require("./reaction"), exports);
__exportStar(require("./reactionrollup"), exports);
__exportStar(require("./release"), exports);
__exportStar(require("./releaseasset"), exports);
__exportStar(require("./removedfromprojectissueevent"), exports);
__exportStar(require("./renamedissueevent"), exports);
__exportStar(require("./reposearchresultitem"), exports);
__exportStar(require("./repository"), exports);
__exportStar(require("./repositorycollaboratorpermission"), exports);
__exportStar(require("./repositoryinvitation"), exports);
__exportStar(require("./repositoryprereceivehook"), exports);
__exportStar(require("./repositorysubscription"), exports);
__exportStar(require("./reviewcomment"), exports);
__exportStar(require("./reviewdismissedissueevent"), exports);
__exportStar(require("./reviewrequestedissueevent"), exports);
__exportStar(require("./reviewrequestremovedissueevent"), exports);
__exportStar(require("./runner"), exports);
__exportStar(require("./runnerapplication"), exports);
__exportStar(require("./runnergroupsenterprise"), exports);
__exportStar(require("./runnergroupsorg"), exports);
__exportStar(require("./runnerlabel"), exports);
__exportStar(require("./scimerror"), exports);
__exportStar(require("./searchresulttextmatches"), exports);
__exportStar(require("./selectedactions"), exports);
__exportStar(require("./shortblob"), exports);
__exportStar(require("./shortbranch"), exports);
__exportStar(require("./simplecommit"), exports);
__exportStar(require("./simplecommitstatus"), exports);
__exportStar(require("./simpleuser"), exports);
__exportStar(require("./sortenum"), exports);
__exportStar(require("./sshkey"), exports);
__exportStar(require("./stargazer"), exports);
__exportStar(require("./starredrepository"), exports);
__exportStar(require("./statechangeissueevent"), exports);
__exportStar(require("./status"), exports);
__exportStar(require("./statuscheckpolicy"), exports);
__exportStar(require("./statusenum"), exports);
__exportStar(require("./tag"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./teamdiscussion"), exports);
__exportStar(require("./teamdiscussioncomment"), exports);
__exportStar(require("./teamfull"), exports);
__exportStar(require("./teammembership"), exports);
__exportStar(require("./teamproject"), exports);
__exportStar(require("./teamrepository"), exports);
__exportStar(require("./teamsimple"), exports);
__exportStar(require("./thread"), exports);
__exportStar(require("./threadsubscription"), exports);
__exportStar(require("./timelineassignedissueevent"), exports);
__exportStar(require("./timelinecommentevent"), exports);
__exportStar(require("./timelinecommitcommentedevent"), exports);
__exportStar(require("./timelinecommittedevent"), exports);
__exportStar(require("./timelinecrossreferencedevent"), exports);
__exportStar(require("./timelinelinecommentedevent"), exports);
__exportStar(require("./timelinereviewedevent"), exports);
__exportStar(require("./timelineunassignedissueevent"), exports);
__exportStar(require("./topic"), exports);
__exportStar(require("./topicsearchresultitem"), exports);
__exportStar(require("./unassignedissueevent"), exports);
__exportStar(require("./unlabeledissueevent"), exports);
__exportStar(require("./usersearchresultitem"), exports);
__exportStar(require("./validationerror"), exports);
__exportStar(require("./validationerrorsimple"), exports);
__exportStar(require("./verification"), exports);
__exportStar(require("./webhookconfig"), exports);
__exportStar(require("./workflow"), exports);
__exportStar(require("./workflowrun"), exports);
__exportStar(require("./workflowrunstatusenum"), exports);
