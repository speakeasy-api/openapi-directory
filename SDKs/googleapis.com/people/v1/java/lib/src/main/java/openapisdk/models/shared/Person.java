package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Person
 * Information about a person merged from various data sources such as the authenticated user's contacts and profile data. Most fields can have multiple items. The items in a field have no guaranteed order, but each non-empty field is guaranteed to have exactly one field with `metadata.primary` set to true.
**/
public class Person {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public Address[] addresses;
    public Person withAddresses(Address[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRange")
    public PersonAgeRangeEnum ageRange;
    public Person withAgeRange(PersonAgeRangeEnum ageRange) {
        this.ageRange = ageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRanges")
    public AgeRangeType[] ageRanges;
    public Person withAgeRanges(AgeRangeType[] ageRanges) {
        this.ageRanges = ageRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("biographies")
    public Biography[] biographies;
    public Person withBiographies(Biography[] biographies) {
        this.biographies = biographies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("birthdays")
    public Birthday[] birthdays;
    public Person withBirthdays(Birthday[] birthdays) {
        this.birthdays = birthdays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("braggingRights")
    public BraggingRights[] braggingRights;
    public Person withBraggingRights(BraggingRights[] braggingRights) {
        this.braggingRights = braggingRights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarUrls")
    public CalendarUrl[] calendarUrls;
    public Person withCalendarUrls(CalendarUrl[] calendarUrls) {
        this.calendarUrls = calendarUrls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientData")
    public ClientData[] clientData;
    public Person withClientData(ClientData[] clientData) {
        this.clientData = clientData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPhotos")
    public CoverPhoto[] coverPhotos;
    public Person withCoverPhotos(CoverPhoto[] coverPhotos) {
        this.coverPhotos = coverPhotos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailAddresses")
    public EmailAddress[] emailAddresses;
    public Person withEmailAddresses(EmailAddress[] emailAddresses) {
        this.emailAddresses = emailAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public Person withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public Event[] events;
    public Person withEvents(Event[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalIds")
    public ExternalId[] externalIds;
    public Person withExternalIds(ExternalId[] externalIds) {
        this.externalIds = externalIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileAses")
    public FileAs[] fileAses;
    public Person withFileAses(FileAs[] fileAses) {
        this.fileAses = fileAses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("genders")
    public Gender[] genders;
    public Person withGenders(Gender[] genders) {
        this.genders = genders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imClients")
    public ImClient[] imClients;
    public Person withImClients(ImClient[] imClients) {
        this.imClients = imClients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interests")
    public Interest[] interests;
    public Person withInterests(Interest[] interests) {
        this.interests = interests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locales")
    public Locale[] locales;
    public Person withLocales(Locale[] locales) {
        this.locales = locales;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public Location[] locations;
    public Person withLocations(Location[] locations) {
        this.locations = locations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memberships")
    public Membership[] memberships;
    public Person withMemberships(Membership[] memberships) {
        this.memberships = memberships;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public PersonMetadata metadata;
    public Person withMetadata(PersonMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miscKeywords")
    public MiscKeyword[] miscKeywords;
    public Person withMiscKeywords(MiscKeyword[] miscKeywords) {
        this.miscKeywords = miscKeywords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public Name[] names;
    public Person withNames(Name[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nicknames")
    public Nickname[] nicknames;
    public Person withNicknames(Nickname[] nicknames) {
        this.nicknames = nicknames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occupations")
    public Occupation[] occupations;
    public Person withOccupations(Occupation[] occupations) {
        this.occupations = occupations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizations")
    public Organization[] organizations;
    public Person withOrganizations(Organization[] organizations) {
        this.organizations = organizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumbers")
    public PhoneNumber[] phoneNumbers;
    public Person withPhoneNumbers(PhoneNumber[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("photos")
    public Photo[] photos;
    public Person withPhotos(Photo[] photos) {
        this.photos = photos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public Relation[] relations;
    public Person withRelations(Relation[] relations) {
        this.relations = relations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipInterests")
    public RelationshipInterest[] relationshipInterests;
    public Person withRelationshipInterests(RelationshipInterest[] relationshipInterests) {
        this.relationshipInterests = relationshipInterests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationshipStatuses")
    public RelationshipStatus[] relationshipStatuses;
    public Person withRelationshipStatuses(RelationshipStatus[] relationshipStatuses) {
        this.relationshipStatuses = relationshipStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("residences")
    public Residence[] residences;
    public Person withResidences(Residence[] residences) {
        this.residences = residences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceName")
    public String resourceName;
    public Person withResourceName(String resourceName) {
        this.resourceName = resourceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sipAddresses")
    public SipAddress[] sipAddresses;
    public Person withSipAddresses(SipAddress[] sipAddresses) {
        this.sipAddresses = sipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skills")
    public Skill[] skills;
    public Person withSkills(Skill[] skills) {
        this.skills = skills;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taglines")
    public Tagline[] taglines;
    public Person withTaglines(Tagline[] taglines) {
        this.taglines = taglines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("urls")
    public Url[] urls;
    public Person withUrls(Url[] urls) {
        this.urls = urls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefined")
    public UserDefined[] userDefined;
    public Person withUserDefined(UserDefined[] userDefined) {
        this.userDefined = userDefined;
        return this;
    }
}