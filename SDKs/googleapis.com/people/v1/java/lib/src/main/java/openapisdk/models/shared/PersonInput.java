package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PersonInput
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
public class PersonInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public AddressInput[] addresses;
    public PersonInput withAddresses(AddressInput[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biographies")
    public BiographyInput[] biographies;
    public PersonInput withBiographies(BiographyInput[] biographies) {
        this.biographies = biographies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthdays")
    public BirthdayInput[] birthdays;
    public PersonInput withBirthdays(BirthdayInput[] birthdays) {
        this.birthdays = birthdays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("braggingRights")
    public BraggingRightsInput[] braggingRights;
    public PersonInput withBraggingRights(BraggingRightsInput[] braggingRights) {
        this.braggingRights = braggingRights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarUrls")
    public CalendarUrlInput[] calendarUrls;
    public PersonInput withCalendarUrls(CalendarUrlInput[] calendarUrls) {
        this.calendarUrls = calendarUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientData")
    public ClientDataInput[] clientData;
    public PersonInput withClientData(ClientDataInput[] clientData) {
        this.clientData = clientData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public EmailAddressInput[] emailAddresses;
    public PersonInput withEmailAddresses(EmailAddressInput[] emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public PersonInput withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public EventInput[] events;
    public PersonInput withEvents(EventInput[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIds")
    public ExternalIdInput[] externalIds;
    public PersonInput withExternalIds(ExternalIdInput[] externalIds) {
        this.externalIds = externalIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileAses")
    public FileAsInput[] fileAses;
    public PersonInput withFileAses(FileAsInput[] fileAses) {
        this.fileAses = fileAses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genders")
    public GenderInput[] genders;
    public PersonInput withGenders(GenderInput[] genders) {
        this.genders = genders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imClients")
    public ImClientInput[] imClients;
    public PersonInput withImClients(ImClientInput[] imClients) {
        this.imClients = imClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interests")
    public InterestInput[] interests;
    public PersonInput withInterests(InterestInput[] interests) {
        this.interests = interests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locales")
    public LocaleInput[] locales;
    public PersonInput withLocales(LocaleInput[] locales) {
        this.locales = locales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public LocationInput[] locations;
    public PersonInput withLocations(LocationInput[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public MembershipInput[] memberships;
    public PersonInput withMemberships(MembershipInput[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public PersonMetadataInput metadata;
    public PersonInput withMetadata(PersonMetadataInput metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miscKeywords")
    public MiscKeywordInput[] miscKeywords;
    public PersonInput withMiscKeywords(MiscKeywordInput[] miscKeywords) {
        this.miscKeywords = miscKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public NameInput[] names;
    public PersonInput withNames(NameInput[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicknames")
    public NicknameInput[] nicknames;
    public PersonInput withNicknames(NicknameInput[] nicknames) {
        this.nicknames = nicknames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupations")
    public OccupationInput[] occupations;
    public PersonInput withOccupations(OccupationInput[] occupations) {
        this.occupations = occupations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations")
    public OrganizationInput[] organizations;
    public PersonInput withOrganizations(OrganizationInput[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumbers")
    public PhoneNumberInput[] phoneNumbers;
    public PersonInput withPhoneNumbers(PhoneNumberInput[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public RelationInput[] relations;
    public PersonInput withRelations(RelationInput[] relations) {
        this.relations = relations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("residences")
    public ResidenceInput[] residences;
    public PersonInput withResidences(ResidenceInput[] residences) {
        this.residences = residences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public PersonInput withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sipAddresses")
    public SipAddressInput[] sipAddresses;
    public PersonInput withSipAddresses(SipAddressInput[] sipAddresses) {
        this.sipAddresses = sipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skills")
    public SkillInput[] skills;
    public PersonInput withSkills(SkillInput[] skills) {
        this.skills = skills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public UrlInput[] urls;
    public PersonInput withUrls(UrlInput[] urls) {
        this.urls = urls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefined")
    public UserDefinedInput[] userDefined;
    public PersonInput withUserDefined(UserDefinedInput[] userDefined) {
        this.userDefined = userDefined;
        return this;
    }
}