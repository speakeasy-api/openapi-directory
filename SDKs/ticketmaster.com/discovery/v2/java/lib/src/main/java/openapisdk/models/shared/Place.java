package openapisdk.models.shared;



/**
 * Place
 * Place
**/
public class Place {
    public Address address;
    public Place withAddress(Address address) {
        this.address = address;
        return this;
    }
    public Area area;
    public Place withArea(Area area) {
        this.area = area;
        return this;
    }
    public City city;
    public Place withCity(City city) {
        this.city = city;
        return this;
    }
    public Country country;
    public Place withCountry(Country country) {
        this.country = country;
        return this;
    }
    public Location location;
    public Place withLocation(Location location) {
        this.location = location;
        return this;
    }
    public String name;
    public Place withName(String name) {
        this.name = name;
        return this;
    }
    public String postalCode;
    public Place withPostalCode(String postalCode) {
        this.postalCode = postalCode;
        return this;
    }
    public State state;
    public Place withState(State state) {
        this.state = state;
        return this;
    }
}