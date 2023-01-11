package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Person {
    @JsonProperty("birth_date")
    public String birthDate;
    public Person withBirthDate(String birthDate) {
        this.birthDate = birthDate;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Person withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_role")
    public CurrentRole currentRole;
    public Person withCurrentRole(CurrentRole currentRole) {
        this.currentRole = currentRole;
        return this;
    }
    @JsonProperty("death_date")
    public String deathDate;
    public Person withDeathDate(String deathDate) {
        this.deathDate = deathDate;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public Person withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("extras")
    public java.util.Map<String, Object> extras;
    public Person withExtras(java.util.Map<String, Object> extras) {
        this.extras = extras;
        return this;
    }
    @JsonProperty("family_name")
    public String familyName;
    public Person withFamilyName(String familyName) {
        this.familyName = familyName;
        return this;
    }
    @JsonProperty("gender")
    public String gender;
    public Person withGender(String gender) {
        this.gender = gender;
        return this;
    }
    @JsonProperty("given_name")
    public String givenName;
    public Person withGivenName(String givenName) {
        this.givenName = givenName;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Person withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("image")
    public String image;
    public Person withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonProperty("jurisdiction")
    public CompactJurisdiction jurisdiction;
    public Person withJurisdiction(CompactJurisdiction jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Link[] links;
    public Person withLinks(Link[] links) {
        this.links = links;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Person withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offices")
    public Office[] offices;
    public Person withOffices(Office[] offices) {
        this.offices = offices;
        return this;
    }
    @JsonProperty("openstates_url")
    public String openstatesUrl;
    public Person withOpenstatesUrl(String openstatesUrl) {
        this.openstatesUrl = openstatesUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_identifiers")
    public AltIdentifier[] otherIdentifiers;
    public Person withOtherIdentifiers(AltIdentifier[] otherIdentifiers) {
        this.otherIdentifiers = otherIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("other_names")
    public AltName[] otherNames;
    public Person withOtherNames(AltName[] otherNames) {
        this.otherNames = otherNames;
        return this;
    }
    @JsonProperty("party")
    public String party;
    public Person withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public Link[] sources;
    public Person withSources(Link[] sources) {
        this.sources = sources;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Person withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}