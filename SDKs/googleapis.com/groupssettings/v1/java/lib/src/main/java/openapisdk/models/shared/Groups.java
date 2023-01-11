package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Groups
 * JSON template for Group resource
**/
public class Groups {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowExternalMembers")
    public String allowExternalMembers;
    public Groups withAllowExternalMembers(String allowExternalMembers) {
        this.allowExternalMembers = allowExternalMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowGoogleCommunication")
    public String allowGoogleCommunication;
    public Groups withAllowGoogleCommunication(String allowGoogleCommunication) {
        this.allowGoogleCommunication = allowGoogleCommunication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowWebPosting")
    public String allowWebPosting;
    public Groups withAllowWebPosting(String allowWebPosting) {
        this.allowWebPosting = allowWebPosting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveOnly")
    public String archiveOnly;
    public Groups withArchiveOnly(String archiveOnly) {
        this.archiveOnly = archiveOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFooterText")
    public String customFooterText;
    public Groups withCustomFooterText(String customFooterText) {
        this.customFooterText = customFooterText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customReplyTo")
    public String customReplyTo;
    public Groups withCustomReplyTo(String customReplyTo) {
        this.customReplyTo = customReplyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customRolesEnabledForSettingsToBeMerged")
    public String customRolesEnabledForSettingsToBeMerged;
    public Groups withCustomRolesEnabledForSettingsToBeMerged(String customRolesEnabledForSettingsToBeMerged) {
        this.customRolesEnabledForSettingsToBeMerged = customRolesEnabledForSettingsToBeMerged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultMessageDenyNotificationText")
    public String defaultMessageDenyNotificationText;
    public Groups withDefaultMessageDenyNotificationText(String defaultMessageDenyNotificationText) {
        this.defaultMessageDenyNotificationText = defaultMessageDenyNotificationText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_sender")
    public String defaultSender;
    public Groups withDefaultSender(String defaultSender) {
        this.defaultSender = defaultSender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Groups withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public Groups withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableCollaborativeInbox")
    public String enableCollaborativeInbox;
    public Groups withEnableCollaborativeInbox(String enableCollaborativeInbox) {
        this.enableCollaborativeInbox = enableCollaborativeInbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("favoriteRepliesOnTop")
    public String favoriteRepliesOnTop;
    public Groups withFavoriteRepliesOnTop(String favoriteRepliesOnTop) {
        this.favoriteRepliesOnTop = favoriteRepliesOnTop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeCustomFooter")
    public String includeCustomFooter;
    public Groups withIncludeCustomFooter(String includeCustomFooter) {
        this.includeCustomFooter = includeCustomFooter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInGlobalAddressList")
    public String includeInGlobalAddressList;
    public Groups withIncludeInGlobalAddressList(String includeInGlobalAddressList) {
        this.includeInGlobalAddressList = includeInGlobalAddressList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isArchived")
    public String isArchived;
    public Groups withIsArchived(String isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Groups withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxMessageBytes")
    public Integer maxMessageBytes;
    public Groups withMaxMessageBytes(Integer maxMessageBytes) {
        this.maxMessageBytes = maxMessageBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("membersCanPostAsTheGroup")
    public String membersCanPostAsTheGroup;
    public Groups withMembersCanPostAsTheGroup(String membersCanPostAsTheGroup) {
        this.membersCanPostAsTheGroup = membersCanPostAsTheGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageDisplayFont")
    public String messageDisplayFont;
    public Groups withMessageDisplayFont(String messageDisplayFont) {
        this.messageDisplayFont = messageDisplayFont;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageModerationLevel")
    public String messageModerationLevel;
    public Groups withMessageModerationLevel(String messageModerationLevel) {
        this.messageModerationLevel = messageModerationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Groups withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryLanguage")
    public String primaryLanguage;
    public Groups withPrimaryLanguage(String primaryLanguage) {
        this.primaryLanguage = primaryLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyTo")
    public String replyTo;
    public Groups withReplyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendMessageDenyNotification")
    public String sendMessageDenyNotification;
    public Groups withSendMessageDenyNotification(String sendMessageDenyNotification) {
        this.sendMessageDenyNotification = sendMessageDenyNotification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("showInGroupDirectory")
    public String showInGroupDirectory;
    public Groups withShowInGroupDirectory(String showInGroupDirectory) {
        this.showInGroupDirectory = showInGroupDirectory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spamModerationLevel")
    public String spamModerationLevel;
    public Groups withSpamModerationLevel(String spamModerationLevel) {
        this.spamModerationLevel = spamModerationLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanAdd")
    public String whoCanAdd;
    public Groups withWhoCanAdd(String whoCanAdd) {
        this.whoCanAdd = whoCanAdd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanAddReferences")
    public String whoCanAddReferences;
    public Groups withWhoCanAddReferences(String whoCanAddReferences) {
        this.whoCanAddReferences = whoCanAddReferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanApproveMembers")
    public String whoCanApproveMembers;
    public Groups withWhoCanApproveMembers(String whoCanApproveMembers) {
        this.whoCanApproveMembers = whoCanApproveMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanApproveMessages")
    public String whoCanApproveMessages;
    public Groups withWhoCanApproveMessages(String whoCanApproveMessages) {
        this.whoCanApproveMessages = whoCanApproveMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanAssignTopics")
    public String whoCanAssignTopics;
    public Groups withWhoCanAssignTopics(String whoCanAssignTopics) {
        this.whoCanAssignTopics = whoCanAssignTopics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanAssistContent")
    public String whoCanAssistContent;
    public Groups withWhoCanAssistContent(String whoCanAssistContent) {
        this.whoCanAssistContent = whoCanAssistContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanBanUsers")
    public String whoCanBanUsers;
    public Groups withWhoCanBanUsers(String whoCanBanUsers) {
        this.whoCanBanUsers = whoCanBanUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanContactOwner")
    public String whoCanContactOwner;
    public Groups withWhoCanContactOwner(String whoCanContactOwner) {
        this.whoCanContactOwner = whoCanContactOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanDeleteAnyPost")
    public String whoCanDeleteAnyPost;
    public Groups withWhoCanDeleteAnyPost(String whoCanDeleteAnyPost) {
        this.whoCanDeleteAnyPost = whoCanDeleteAnyPost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanDeleteTopics")
    public String whoCanDeleteTopics;
    public Groups withWhoCanDeleteTopics(String whoCanDeleteTopics) {
        this.whoCanDeleteTopics = whoCanDeleteTopics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanDiscoverGroup")
    public String whoCanDiscoverGroup;
    public Groups withWhoCanDiscoverGroup(String whoCanDiscoverGroup) {
        this.whoCanDiscoverGroup = whoCanDiscoverGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanEnterFreeFormTags")
    public String whoCanEnterFreeFormTags;
    public Groups withWhoCanEnterFreeFormTags(String whoCanEnterFreeFormTags) {
        this.whoCanEnterFreeFormTags = whoCanEnterFreeFormTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanHideAbuse")
    public String whoCanHideAbuse;
    public Groups withWhoCanHideAbuse(String whoCanHideAbuse) {
        this.whoCanHideAbuse = whoCanHideAbuse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanInvite")
    public String whoCanInvite;
    public Groups withWhoCanInvite(String whoCanInvite) {
        this.whoCanInvite = whoCanInvite;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanJoin")
    public String whoCanJoin;
    public Groups withWhoCanJoin(String whoCanJoin) {
        this.whoCanJoin = whoCanJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanLeaveGroup")
    public String whoCanLeaveGroup;
    public Groups withWhoCanLeaveGroup(String whoCanLeaveGroup) {
        this.whoCanLeaveGroup = whoCanLeaveGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanLockTopics")
    public String whoCanLockTopics;
    public Groups withWhoCanLockTopics(String whoCanLockTopics) {
        this.whoCanLockTopics = whoCanLockTopics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMakeTopicsSticky")
    public String whoCanMakeTopicsSticky;
    public Groups withWhoCanMakeTopicsSticky(String whoCanMakeTopicsSticky) {
        this.whoCanMakeTopicsSticky = whoCanMakeTopicsSticky;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMarkDuplicate")
    public String whoCanMarkDuplicate;
    public Groups withWhoCanMarkDuplicate(String whoCanMarkDuplicate) {
        this.whoCanMarkDuplicate = whoCanMarkDuplicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMarkFavoriteReplyOnAnyTopic")
    public String whoCanMarkFavoriteReplyOnAnyTopic;
    public Groups withWhoCanMarkFavoriteReplyOnAnyTopic(String whoCanMarkFavoriteReplyOnAnyTopic) {
        this.whoCanMarkFavoriteReplyOnAnyTopic = whoCanMarkFavoriteReplyOnAnyTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMarkFavoriteReplyOnOwnTopic")
    public String whoCanMarkFavoriteReplyOnOwnTopic;
    public Groups withWhoCanMarkFavoriteReplyOnOwnTopic(String whoCanMarkFavoriteReplyOnOwnTopic) {
        this.whoCanMarkFavoriteReplyOnOwnTopic = whoCanMarkFavoriteReplyOnOwnTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMarkNoResponseNeeded")
    public String whoCanMarkNoResponseNeeded;
    public Groups withWhoCanMarkNoResponseNeeded(String whoCanMarkNoResponseNeeded) {
        this.whoCanMarkNoResponseNeeded = whoCanMarkNoResponseNeeded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanModerateContent")
    public String whoCanModerateContent;
    public Groups withWhoCanModerateContent(String whoCanModerateContent) {
        this.whoCanModerateContent = whoCanModerateContent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanModerateMembers")
    public String whoCanModerateMembers;
    public Groups withWhoCanModerateMembers(String whoCanModerateMembers) {
        this.whoCanModerateMembers = whoCanModerateMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanModifyMembers")
    public String whoCanModifyMembers;
    public Groups withWhoCanModifyMembers(String whoCanModifyMembers) {
        this.whoCanModifyMembers = whoCanModifyMembers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanModifyTagsAndCategories")
    public String whoCanModifyTagsAndCategories;
    public Groups withWhoCanModifyTagsAndCategories(String whoCanModifyTagsAndCategories) {
        this.whoCanModifyTagsAndCategories = whoCanModifyTagsAndCategories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMoveTopicsIn")
    public String whoCanMoveTopicsIn;
    public Groups withWhoCanMoveTopicsIn(String whoCanMoveTopicsIn) {
        this.whoCanMoveTopicsIn = whoCanMoveTopicsIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanMoveTopicsOut")
    public String whoCanMoveTopicsOut;
    public Groups withWhoCanMoveTopicsOut(String whoCanMoveTopicsOut) {
        this.whoCanMoveTopicsOut = whoCanMoveTopicsOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanPostAnnouncements")
    public String whoCanPostAnnouncements;
    public Groups withWhoCanPostAnnouncements(String whoCanPostAnnouncements) {
        this.whoCanPostAnnouncements = whoCanPostAnnouncements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanPostMessage")
    public String whoCanPostMessage;
    public Groups withWhoCanPostMessage(String whoCanPostMessage) {
        this.whoCanPostMessage = whoCanPostMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanTakeTopics")
    public String whoCanTakeTopics;
    public Groups withWhoCanTakeTopics(String whoCanTakeTopics) {
        this.whoCanTakeTopics = whoCanTakeTopics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanUnassignTopic")
    public String whoCanUnassignTopic;
    public Groups withWhoCanUnassignTopic(String whoCanUnassignTopic) {
        this.whoCanUnassignTopic = whoCanUnassignTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanUnmarkFavoriteReplyOnAnyTopic")
    public String whoCanUnmarkFavoriteReplyOnAnyTopic;
    public Groups withWhoCanUnmarkFavoriteReplyOnAnyTopic(String whoCanUnmarkFavoriteReplyOnAnyTopic) {
        this.whoCanUnmarkFavoriteReplyOnAnyTopic = whoCanUnmarkFavoriteReplyOnAnyTopic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanViewGroup")
    public String whoCanViewGroup;
    public Groups withWhoCanViewGroup(String whoCanViewGroup) {
        this.whoCanViewGroup = whoCanViewGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whoCanViewMembership")
    public String whoCanViewMembership;
    public Groups withWhoCanViewMembership(String whoCanViewMembership) {
        this.whoCanViewMembership = whoCanViewMembership;
        return this;
    }
}